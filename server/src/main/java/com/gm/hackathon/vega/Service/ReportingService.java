package com.gm.hackathon.vega.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.gm.hackathon.vega.Model.User;

public class ReportingService{

    private String dealershipHeader="DEALERSHIP NAME, TOTAL ATTEMPTS, PASSING ATTEMPTS, PASSING RATE";
    private String stateHeader="STATE, TOTAL ATTEMPTS, PASSING ATTEMPTS, PASSING RATE";
    private String satisfactionHeader="PERCENT SATISFIED, PERCENT UNSATISFIED, PERCENT UNKNOWN, NUMBER OF INDIVIDUALS SURVEYED";

    private UserService userService = UserService.getInstance();

    public ReportingService(){
        writeToExcel(dealershipHeader,getDealershipStatistics(), "Dealership");
        writeToExcel(stateHeader,getStateStatistics(),"State");
        writeToExcel(satisfactionHeader,getSatisfactionStatistics(), "Satisfaction");
    }

    private String getSatisfactionStatistics(){
        int yes=0, no=0, noAnswer=0;
        for(int i=1;i<=1000;i++){
            Boolean isSatisfied = userService.getUser(i).isSatisfied();
            try {
                if (isSatisfied)
                    yes++;
                else
                    no++;
            }
            catch (NullPointerException e) {
                noAnswer++;
            }
        }
        int totalCount=yes+no+noAnswer;
        return String.format("%.2f,%.2f,%.2f,%d%n", ((double)yes/totalCount), ((double)no/totalCount), ((double)noAnswer/totalCount), totalCount);
    }
    private String getStateStatistics(){
        String output="";
        ArrayList<String> states = new ArrayList<String>();
        for (int i=1; i<=1000; i++){
            String temp = userService.getUser(i).getState();
            if (states.size() !=0){
                if (!searchArray(temp, states))
                    states.add(temp);
            }
            else{
                states.add(temp);
            }
        }
        Collections.sort(states);
        for (String state : states){
            List<User> userList = userService.getUsersByState(state);
            int attempts=0,passingAttempts=0;
            for (User a : userList){
                attempts+=a.getCorrect_answers()+a.getIncorrect_answers();
                passingAttempts+=a.getCorrect_answers();
            }
            double percentCorrect=(double)passingAttempts/attempts;
            output+=state+","+attempts+","+passingAttempts+","+String.format("%.2f%n", percentCorrect);
        }
        return output;
    }
    private String getDealershipStatistics(){
        String output="";
        //This gathers a list of every dealership and places the names into an arraylist
        ArrayList<String> dealerships = new ArrayList<String>();
        for (int i=1; i<=1000; i++){
            String temp = userService.getUser(i).getDealership();
            if (dealerships.size() != 0) {
                if (!searchArray(temp, dealerships))
                    dealerships.add(temp);
            }
            else
                dealerships.add(temp);
        }
        Collections.sort(dealerships);
        //This iterates through the dealerships arraylist and gathers the statistics about passing rates.
        for (String dealerName: dealerships){
            List<User> userList = userService.getUsersByDealership(dealerName);
            int attempts=0,passingAttempts=0;
            for (User a : userList){
                attempts+=a.getCorrect_answers()+a.getIncorrect_answers();
                passingAttempts+=a.getCorrect_answers();
            }
            double percentCorrect=(double)passingAttempts/attempts;
            output+=dealerName+","+attempts+","+passingAttempts+","+String.format("%.2f%n", percentCorrect);
        }
        return output;
    }
    private boolean searchArray(String query, ArrayList<String> arr){
        for (String temp: arr){
            if (query.equals(temp))
                return true;
        }
        return false;
    }
    private void writeToExcel(String header, String data, String reportType) {
        try{
            FileWriter writer = new FileWriter((""+LocalDateTime.now()).split("T")[0]+"_"+reportType+" Report.csv");
            writer.append(header+"\n"+data);
            writer.flush();
            writer.close();
        } catch (IOException e){
            e.printStackTrace();
        }

    }
}