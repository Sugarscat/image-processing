package org.com;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        String folderPath = "D:\\Ai_improve";
        String dir = "./realesrgan-ncnn-vulkan.exe -i input.jpg -o output.png -n realesrgan-x4plus-anime";
        String[] command = {"powershell.exe", "cd " + folderPath + ";" + dir};

        ProcessBuilder pb = new ProcessBuilder(command);
        pb.redirectErrorStream(true);
        Process p = pb.start();

        InputStream inputStream = p.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    }
}

