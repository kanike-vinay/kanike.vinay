package sample.thread.semaphore;

import java.util.concurrent.Semaphore;

public class Connection {

    private static Connection connection = new Connection();

    private int connections = 0 ;

    private Semaphore semaphore = new Semaphore(10, true);

    public Connection() {
    }

    public static Connection getInstance(){
        return connection;
    }

    public void connect(){
        try {
            semaphore.acquire();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        try {
            doConnect();
        } finally {
            semaphore.release();
        }

    }
    public void doConnect(){


        synchronized (this){
            connections++;
            System.out.println("Current Connections :: " + connections);
        }

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        synchronized (this){
            connections--;
        }

//        semaphore.release();
    }
}
