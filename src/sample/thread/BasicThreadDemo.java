package sample.thread;

class Runner extends Thread{

    public void run() {
        for (int i=0; i<10; i++){
            System.out.println("Hello :: " + i);

            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class BasicThreadDemo {
    public static void main(String[] args) {
        Runner runner = new Runner();
        runner.start();

        Runner runner1 = new Runner();
        runner1.start();

    }
}
