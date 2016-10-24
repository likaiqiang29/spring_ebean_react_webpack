package com.likaiqiang.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
/**
 * Created by likaiqiang on 2016-10-10 09-48.
 */
@Controller
@RequestMapping("main")
public class MainController{



    @RequestMapping("/**")
    public String main(
            HttpServletRequest request,
            Model model
    ) {
        return "view/index";
    }
}
