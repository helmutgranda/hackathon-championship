package com.gm.hackathon.vega.Controller;

import com.gm.hackathon.vega.Model.User;
import com.gm.hackathon.vega.Service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    private static UserService userService = UserService.getInstance();

    @GetMapping("/user/{id}")
    @ResponseBody
    public User getUser(@PathVariable int id){ return userService.getUser(id); }

    @GetMapping("/users")
    @ResponseBody
    public List<User> getUsers(){ return userService.getUsers(); }

    @GetMapping("/user/{id}/avatar")
    @ResponseBody
    public String getUserAvatar(@PathVariable int id) { return userService.getUserAvatar(id); }
}
