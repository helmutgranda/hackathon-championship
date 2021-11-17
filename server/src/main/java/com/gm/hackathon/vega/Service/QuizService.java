package com.gm.hackathon.vega.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gm.hackathon.vega.Model.Quiz;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Service
public class QuizService {

    private ObjectMapper mapper = new ObjectMapper();

    private final List<Quiz> quizzes = Arrays.asList(mapper.readValue(new ClassPathResource("quizzes.json").getFile(), Quiz[].class));

    private static QuizService instance;

    static {
        try {
            instance = new QuizService();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private QuizService() throws IOException { }

    public static QuizService getInstance() {
        return instance;
    }

    public Quiz getQuiz(int id){
        for(Quiz quiz : quizzes){
            if(quiz.getId() == id)
                return quiz;
        }

        return null;
    }

    public List<Quiz> getQuizzes(){
        return quizzes;
    }
}
