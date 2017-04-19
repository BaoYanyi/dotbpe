// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: hello_rpc.proto
#region Designer generated code

using System; 
using System.Threading.Tasks; 
using DotBPE.Rpc; 
using DotBPE.Protocol.Amp; 
using Google.Protobuf; 

namespace HelloRpc.Common {

//start for class AbstractGreeter
public abstract class GreeterBase : IServiceActor<AmpMessage> 
{
public string Id => "100$0";
//调用委托
private async Task ReceiveHelloPlusAsync(IRpcContext<AmpMessage> context, AmpMessage req)
{
var request = HelloRequest.Parser.ParseFrom(req.Data);
var data = await HelloPlusAsync(request);
var response = AmpMessage.CreateResponseMessage(req.ServiceId, req.MessageId);
response.Sequence = req.Sequence;
response.Data = data.ToByteArray();
await context.SendAsync(response);
}

//抽象方法
public abstract Task<HelloResponse> HelloPlusAsync(HelloRequest request);
public Task ReceiveAsync(IRpcContext<AmpMessage> context, AmpMessage req)
{
//方法Greeter.HelloPlus
if(req.MessageId == 1){return this.ReceiveHelloPlusAsync(context, req);}
return Task.CompletedTask;
}
}
//end for class AbstractGreeter

//start for class AbstractMath
public abstract class MathBase : IServiceActor<AmpMessage> 
{
public string Id => "101$0";
//调用委托
private async Task ReceiveAddAsync(IRpcContext<AmpMessage> context, AmpMessage req)
{
var request = AddRequest.Parser.ParseFrom(req.Data);
var data = await AddAsync(request);
var response = AmpMessage.CreateResponseMessage(req.ServiceId, req.MessageId);
response.Sequence = req.Sequence;
response.Data = data.ToByteArray();
await context.SendAsync(response);
}

//抽象方法
public abstract Task<AddResponse> AddAsync(AddRequest request);
public Task ReceiveAsync(IRpcContext<AmpMessage> context, AmpMessage req)
{
//方法Math.Add
if(req.MessageId == 1){return this.ReceiveAddAsync(context, req);}
return Task.CompletedTask;
}
}
//end for class AbstractMath
}

#endregion

