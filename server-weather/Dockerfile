FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env

ARG BUILD_CONFIGURATION=Debug
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DOTNET_USE_POLLING_FILE_WATCHER=true  
ENV ASPNETCORE_URLS=http://+:5000  

EXPOSE 5000

WORKDIR /app

RUN mkdir server-weather
RUN mkdir server-weather/proto
COPY server-weather/*.csproj ./server-weather
RUN cd server-weather && dotnet restore

COPY shared/protos/weather.proto ./shared/protos/


COPY server-weather/*.cs ./server-weather
COPY server-weather/*.json ./server-weather
COPY server-weather/Properties ./server-weather/Properties
RUN  dotnet publish ./server-weather/server.csproj -c Release -o server-weather/publish -r linux-x64 --self-contained 

ENTRYPOINT ["dotnet","./server-weather/publish/server.dll"]