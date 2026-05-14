public class Sample                                                             {
    private String name                                                         ;

    public Sample(String name)                                                  {
        this.name = name;                                                       }

    public static void sayHello(String content)                                 {
        if (content == null)                                                    {
            System.out.println("...");                                          }
        else if (!content.getClass().equals(String.class))                      {
            System.out.println(":rage:");                                       }
        else                                                                    {
            System.out.println(content);                                        }}

    public static void main(String[] args)                                      {
        sayHello(null)                                                          ;
        sayHello("Hi")                                                          ;

        int[] nums = {1, 2, 3                                                   };
        for (int n : nums)                                                      {
            System.out.println(n);                                              }}}
