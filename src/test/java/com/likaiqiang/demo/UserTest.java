package com.likaiqiang.demo;

import com.avaje.ebean.Ebean;
import com.likaiqiang.demo.model.User;
import org.junit.Test;

/**
 * Created by likaiqiang on 2016-09-21 10-27.
 */
public class UserTest {


    @Test
    public void saveUser(){
        User user = new User();
        user.setName("likaiqiang");
        Ebean.save(user);

    }
}
