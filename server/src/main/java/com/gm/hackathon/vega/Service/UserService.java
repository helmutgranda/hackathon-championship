package com.gm.hackathon.vega.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gm.hackathon.vega.Model.User;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class UserService {

    private ObjectMapper mapper = new ObjectMapper();

    private List<User> users = Arrays.asList(mapper.readValue(new ClassPathResource("users.json").getFile(), User[].class));

    private static UserService instance;

    static {
        try {
            instance = new UserService();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private UserService() throws IOException { }

    public static UserService getInstance(){ return instance; }

    public List<User> getUsers(){
        return users;
    }

    public User getUser(int id){
        for(User user : users){
            if(user.getId() == id)
                return user;
        }

        return null;
    }

    public String getUserAvatar(int id){
        for(User user : users){
            if(user.getId() == id)
                return user.getAvatar();
        }

        return null;
    }

    public List<User> getUsersByState(String state){
        List<User> usersByState = new ArrayList<>();
        for(User user : users){
            if(user.getState().equalsIgnoreCase(state)){
                usersByState.add(user);
            }
        }
        return usersByState;
    }

    public List<User> getUsersByDealership(String dealership){
        List<User> usersByDealership = new ArrayList<>();
        for(User user : users){
            if(user.getDealership().equalsIgnoreCase(dealership)){
                usersByDealership.add(user);
            }
        }
        return usersByDealership;
    }
}
