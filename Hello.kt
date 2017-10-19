class Hello {
    public fun greeting() {
        var message = "Hello, World from Kotlin"
        println("messagfe=${message}")
    }
}

fun main(args: Array<String>) {
    var obj = Hello()
    obj.greeting()
}
