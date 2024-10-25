const dotnet = require("node-api-dotnet/net8.0");
const path = require("path");
dotnet.load(path.join(__dirname, "bin/Debug/net8.0/MyDotNetLibrary.dll"));
console.log(dotnet);
const MyMathClass = dotnet.MyDotNetLibrary.MyMathClass;
const instance = new MyMathClass();
console.log(instance.Add(3, 5)); // Example usage