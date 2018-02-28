package com.karlaread.karlaread.TestApi;

public class TestApiModel {
	private final long id;
    private final String content;

    public TestApiModel(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
