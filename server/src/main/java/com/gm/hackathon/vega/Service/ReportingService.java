package com.gm.hackathon.vega.Service;

import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.gm.hackathon.vega.Model.User;
import com.gm.hackathon.vega.Model.Quiz;

public class ReportingService{

    private String QuizHeader="Quiz ID, Total Attempts, Passing Attempts, Passing Rate";
    private String dealershipHeader="Dealership Name, Total Attempts, Passing Attempts, Passing Rate";
    private String stateHeader="State, Total Attempts, Passing Attempts, Passing Rate";

    private UserService userService = UserService.getInstance();
    private QuizService quizService = QuizService.getInstance();

    public ReportingService(){

        writeToExcel(dealershipHeader,getDealershipStatistics(), "Dealership");
        writeToExcel(stateHeader,getStateStatistics(),"State");
        /*
        * Report types:
        *   Quiz Statistics
        *   Dealership Statistics - done
        *   State Statistics - done
        *   Satisfaction Statistics
        * */

    }

    private String getQuizStatistics(){

        return "";
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