using Grpc.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Weather;

namespace server
{
    public class WeatherGrpcService : WeatherService.WeatherServiceBase
    {
        public WeatherGrpcService(ILogger<WeatherGrpcService> logger)
        {
            this.logger = logger;
        }     
        private static readonly string[] Summaries =
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static readonly string[] Locations =
        {
            "London", "Paris", "New York", "Barcelona", "Rome", "Porto"
        };
        private readonly ILogger<WeatherGrpcService> logger;

        public override async Task<WeatherResult> RequestCurrentWeatherData(WeatherRequest request, Grpc.Core.ServerCallContext context)
        {
            logger.LogInformation("current weather");
            var rng = new Random();
            var now = DateTime.UtcNow;

            await Task.Delay(2000); // Gotta look busy

            return new WeatherResult { 
                Location = Locations[request.Location],
                Temperature = rng.Next(-20, 55),
                Winddirection = rng.Next(1, 8),
                Windspeed = rng.Next(1, 25),
             };
        }
    }
}
