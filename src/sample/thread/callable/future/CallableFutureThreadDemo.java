package sample.thread.callable.future;

import java.io.IOException;
import java.util.Random;
import java.util.concurrent.*;

public class CallableFutureThreadDemo {
    public static void main(String[] args) {

        ExecutorService executorService = Executors.newCachedThreadPool();

        Future<?> future = executorService.submit(new Callable<Void>() {
            @Override
            public Void call() throws Exception {
                Random random = new Random();
                int duration = random.nextInt(4000);
                if(duration > 2000) {
                    throw new IOException("Sleeping for long time");
                }
                System.out.println("Starting...");

                try {
                    Thread.sleep(duration);
                }catch (InterruptedException e){
                    e.printStackTrace();
                }

                System.out.println("Finished...");

                return null;
            }
        });

        executorService.shutdown();

        try{
            System.out.println("Result :: " + future.get());
        }catch (InterruptedException e){
            e.printStackTrace();
        }catch (ExecutionException e){
            IOException ioException = (IOException) e.getCause();
            System.out.println(ioException.getMessage());
        }

    }
}
