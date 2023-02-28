package org.com;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {
        String folderPath = "D:\\Ai_improve";
        String input = null;
        Scanner sc=new Scanner(System.in);
        input = sc.nextLine();
        if (input == null || input.isEmpty()){
            System.out.println("图片路径有误！");
            return;
        }

        String dir = "./realesrgan-ncnn-vulkan.exe -i " + input +
                " -o outputfolder\\images\\output.png -n realesrgan-x4plus-anime";
        String[] command = {"powershell.exe", "cd " + folderPath + ";" + dir};

        ProcessBuilder pb = new ProcessBuilder(command);
        pb.redirectErrorStream(true);
        Process p = pb.start();

        InputStream inputStream = p.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        // 控制台输出
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    }
}

