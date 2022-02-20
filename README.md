# Important

 This repo is based on aspnetboilerplate https://github.com/aspnetboilerplate/aspnetboilerplate

# Introduction

This is a repo to demonstrate the idea of implementing internal notification (push notification) between application members using signalr. 

![image](https://user-images.githubusercontent.com/38657564/154839835-2a90256e-2e8b-43a5-9e01-6625b7712ae5.png)

1.  Open Backend ui (swagger) and trigger SendNotificationMessage after providing title , message , **userIds** (users you want to send them the message).
2.  You can observe the message as toaster (and this is for example and can be customized based on your needs like navigating to another page or showing modal). 
3.  Another user received a message since I provided his id while hitting the Api.
 
User Interface is based on [AdminLTE theme](https://github.com/ColorlibHQ/AdminLTE).
 
# Download

Create & download your project from https://aspnetboilerplate.com/Templates

# Documentation

* [Internal Realtime Notification Guidline.docx](https://aspnetboilerplate.com/Pages/Documents/Zero/Startup-Template-Core)
 
# License

[MIT](LICENSE).
