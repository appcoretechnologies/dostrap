package com.appcoretech;
/*
 * Copyright 2013 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServerRequest;

/*
This is a simple Java verticle which receives `ping` messages on the event bus and sends back `pong` replies
 */
public class Server extends AbstractVerticle {

    public void start() {
        vertx.createHttpServer().requestHandler(new Handler<HttpServerRequest>() {
            public void handle(HttpServerRequest req) {
                String file = req.path().equals("/") ? "index.html" : req.path();
                req.response().sendFile("webroot/" + file);
            }
        }).listen(8080);
    }

    public static void main(String[] args){
        Vertx v=Vertx.vertx();
        String cname=Server.class.getCanonicalName();
        String udir=System.getProperty("user.dir");
        System.out.println("user.dir "+ udir);
        System.setProperty("user.dir",udir+"\\src\\main\\java");
         udir=System.getProperty("user.dir");
        System.out.println("user.dir "+ udir);
        System.out.println("cname "+cname);
        v.deployVerticle(cname);
    }
}
