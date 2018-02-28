package com.karlaread.karlaread.TestApi;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestApiController {
	private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public TestApiModel greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new TestApiModel(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
