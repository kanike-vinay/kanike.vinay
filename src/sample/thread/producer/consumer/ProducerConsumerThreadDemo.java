package sample.thread.producer.consumer;

import java.util.Random;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ProducerConsumerThreadDemo{

    private static BlockingQueue<Integer> blockingQueue = new ArrayBlockingQueue<Integer>(10);

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    producer();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    consumer();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();
    }

    private static void producer() throws InterruptedException{
        Random random = new Random();
        while(true){
            blockingQueue.put(random.nextInt(100));
        }
    }

    private static void consumer() throws InterruptedException{
        Random random = new Random();
        while (true){
            Thread.sleep(100);
            if(random.nextInt(10) == 0){
                Integer value = blockingQueue.take();
                System.out.println("Taken Value :: " + value + " ; Queue Size :: " + blockingQueue.size());
            }

        }
    }
}
