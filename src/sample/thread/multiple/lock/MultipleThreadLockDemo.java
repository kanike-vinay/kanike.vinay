package sample.thread.multiple.lock;

public class MultipleThreadLockDemo {
    public static void main(String[] args) {
        Worker worker = new Worker();
        worker.main();
    }
}
