package com.appcoretech;

import com.appcoretech.server.AppCoreServerVerticle;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;

/**
 * Created by Ravi on 4/10/2015.
 */
public class MainTest  extends AbstractVerticle {


    public void start() throws Exception {

        String cname=AppCoreServerVerticle.class.getCanonicalName();
        System.out.println("deploying " + cname);
        vertx.deployVerticle(cname, result2 -> {
            if (result2.succeeded()) {
                System.out.println("AppCoreServerVerticle.result() " + result2.result());
            } else {
                result2.cause().printStackTrace();
            }
        });
    }
    public static void main(String[] args){
        System.setProperty("vertx.disableFileCaching", "true");
        Vertx vertx= Vertx.vertx();
        vertx.deployVerticle(MainTest.class.getCanonicalName(), result2 -> {
            if (result2.succeeded()) {
                System.out.println("MainTest.result() " + result2.result());
            } else {
                result2.cause().printStackTrace();
            }
        });

    }
}
