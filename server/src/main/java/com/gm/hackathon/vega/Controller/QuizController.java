package com.gm.hackathon.vega.Controller;

import com.gm.hackathon.vega.Model.Quiz;
import com.gm.hackathon.vega.Service.QuizService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class QuizController {

    private static QuizService quizService = QuizService.getInstance();

    @GetMapping("/quiz/{id}")
    @ResponseBody
    public Quiz getQuiz(@PathVariable int id){
        return quizService.getQuiz(id);
    }

    @GetMapping("/quiz")
    @ResponseBody
    public List<Quiz> getQuizzes(){
        return quizService.getQuizzes();
    }
}
