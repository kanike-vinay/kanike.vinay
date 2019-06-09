package sample.thread.interrupted;

import java.util.Random;

public class InterruptedThreadDemo {
    public static void main(String[] args) throws InterruptedException{
        System.out.println("Starting...");

        Thread t1 = new Thread(new Runnable() {

            Random random = new Random();
            @Override
            public void run() {
                for (int i=0; i<1E9; i++ ){
                    if(Thread.currentThread().isInterrupted()){
                        System.out.println("Interrupted");
                        break;
                    }

                    try {
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        System.out.println("Interrupted");
                        break;
                    }
                }
            }
        });

        t1.start();
        Thread.sleep(500);
        t1.interrupt();
        t1.join();

        System.out.println("Finished...");
    }
}
