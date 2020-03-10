### Named Argument
```csharp
// system is optional
void Log(string msg, string system = "asdf", int priority) {
}
// Method call
Log("Tracker", priority: 0);
```

### Extension Method
```csharp
// Must be static
public static class ExtensionMethods {
  // this [TYPE] [NAME], ...
  public static int toInt(this string value, string value2) {
    return int.Parse(value)
  }
}

// [TYPE] dot toInt(...)
Console.ReadLine().toInt("a");
```

### String interpolation

```csharp
Console.WriteLine($"System: {system}, Priority: {priority}, Msg: {msg}");
```

### Delegates
```csharp
// delegates = function pointers
public delegate int MyDelegate(int i, string s);

int MyFunc(int i, string s) {
  //delegate impl
}

MyDelegate f = MyFunc;
int result = f(1, "Hello World");
```

#### Anonymous delegates
```csharp
MyDelegate f = delegate(int i, string s)
{
   return i;
};
```

#### Composable/chained delegates
```csharp
MyDelegate f1 = func1;
MyDelegate f2 = func2;
MyDelegate f1f2 = f1 + f2; // f1 then f2
f1f2 -= f1 // Remove f1 from the chain
```

#### Event handler
```csharp
// Define delegate for Event handler (delegate is a special class therefore it can be outside)
public delegate void MyEventHandler(string value);

class EventPublisher {

    // Declare event (event [SAME_NAME_AS_DELEGATE])
    public event MyEventHandler valueChanged;

    private string _value;
    public string Value {
        get { return this._value; }
        set {
            this._value = value;
            // Fire event
            this.valueChanged(value);
        }
    }

}

class Program {

    static void Main(string[] args) {
        EventPublisher obj = new EventPublisher();
        // Use obj_valueChanged as event handler
        obj.valueChanged += obj_valueChanged;
        obj.Value = "Output from changed value";
        Console.WriteLine(obj.Value);
        Console.ReadLine();
    }
    
    // Same method signature as delegate
    public static void obj_valueChanged(string value) {
        Console.WriteLine("Output from obj_valueChanged");
    }
}
```
