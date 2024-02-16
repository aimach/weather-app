export const cityResponse = {
  Version: 1,
  Key: "135244",
  Type: "City",
  Rank: 31,
  LocalizedName: "Toulouse",
  EnglishName: "Toulouse",
  PrimaryPostalCode: "",
  Region: {
    ID: "EUR",
    LocalizedName: "Europe",
    EnglishName: "Europe",
  },
  Country: {
    ID: "FR",
    LocalizedName: "France",
    EnglishName: "France",
  },
  AdministrativeArea: {
    ID: "31",
    LocalizedName: "Haute-Garonne",
    EnglishName: "Haute-Garonne",
    Level: 1,
    LocalizedType: "Department",
    EnglishType: "Department",
    CountryID: "FR",
  },
  TimeZone: {
    Code: "CET",
    Name: "Europe/Paris",
    GmtOffset: 1.0,
    IsDaylightSaving: false,
    NextOffsetChange: "2024-03-31T01:00:00Z",
  },
  GeoPosition: {
    Latitude: 43.605,
    Longitude: 1.442,
    Elevation: {
      Metric: {
        Value: 146.0,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 478.0,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [
    {
      Level: 2,
      LocalizedName: "Toulouse",
      EnglishName: "Toulouse",
    },
  ],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
    "Radar",
  ],
};

export const searchCityResponse = [
  {
    AdministrativeArea: { ID: "31", LocalizedName: "Haute-Garonne" },
    Country: { ID: "FR", LocalizedName: "France" },
    Key: "135244",
    LocalizedName: "Toulouse",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "TUL", LocalizedName: "Oblast de Toula" },
    Country: { ID: "RU", LocalizedName: "Russie" },
    Key: "295982",
    LocalizedName: "Toula",
    Rank: 31,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "83", LocalizedName: "Var" },
    Country: { ID: "FR", LocalizedName: "France" },
    Key: "136421",
    LocalizedName: "Toulon",
    Rank: 41,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "MG", LocalizedName: "Montagnes" },
    Country: { ID: "CI", LocalizedName: "Côte d'Ivoire" },
    Key: "114109",
    LocalizedName: "Toulépleu",
    Rank: 55,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "IRK", LocalizedName: "Oblast d'Irkoutsk" },
    Country: { ID: "RU", LocalizedName: "Russie" },
    Key: "288005",
    LocalizedName: "Touloun",
    Rank: 55,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "54", LocalizedName: "Meurthe-et-Moselle" },
    Country: { ID: "FR", LocalizedName: "France" },
    Key: "135055",
    LocalizedName: "Toul",
    Rank: 63,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "EN", LocalizedName: "Extrême-Nord" },
    Country: { ID: "CM", LocalizedName: "Cameroun" },
    Key: "47867",
    LocalizedName: "Touloum",
    Rank: 65,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "MC", LocalizedName: "Moyen-Chari" },
    Country: { ID: "TD", LocalizedName: "Tchad" },
    Key: "54235",
    LocalizedName: "Toulala",
    Rank: 65,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "AL", LocalizedName: "Alibori" },
    Country: { ID: "BJ", LocalizedName: "Bénin" },
    Key: "31968",
    LocalizedName: "Touloua",
    Rank: 75,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "66", LocalizedName: "Pyrénées-Orientales" },
    Country: { ID: "FR", LocalizedName: "France" },
    Key: "164472",
    LocalizedName: "Toulouges",
    Rank: 75,
    Type: "City",
    Version: 1,
  },
];

export const oneDayForecastResponse = {
  Headline: {
    EffectiveDate: "2024-01-14T19:00:00+01:00",
    EffectiveEpochDate: 1705255200,
    Severity: 5,
    Text: "Averses attendues dimanche soir",
    Category: "rain",
    EndDate: "2024-01-15T01:00:00+01:00",
    EndEpochDate: 1705276800,
    MobileLink:
      "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244",
    Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244",
  },
  DailyForecasts: [
    {
      Date: "2024-01-14T07:00:00+01:00",
      EpochDate: 1705212000,
      Temperature: {
        Minimum: {
          Value: 45,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 54,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 7,
        IconPhrase: "Nuageux",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 12,
        IconPhrase: "Averses",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather "],
      MobileLink:
        "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=1",
      Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=1",
    },
  ],
};

export const FiveDaysForecastResponse = {
  Headline: {
    EffectiveDate: "2024-01-07T13:00:00+01:00",
    EffectiveEpochDate: 1704628800,
    Severity: 5,
    Text: "Pluies intermittentes attendues de dimanche après-midi jusqu'à dimanche soir",
    Category: "rain",
    EndDate: "2024-01-08T01:00:00+01:00",
    EndEpochDate: 1704672000,
    MobileLink:
      "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244",
    Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244",
  },
  DailyForecasts: [
    {
      Date: "2024-01-07T07:00:00+01:00",
      EpochDate: 1704607200,
      Temperature: {
        Minimum: {
          Value: 36,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 42,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Averses",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Averses",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather "],
      MobileLink:
        "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=1",
      Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=1",
    },
    {
      Date: "2024-01-08T07:00:00+01:00",
      EpochDate: 1704693600,
      Temperature: {
        Minimum: {
          Value: 24,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 39,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 7,
        IconPhrase: "Nuageux",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 36,
        IconPhrase: "Passages nuageux",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather "],
      MobileLink:
        "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=2",
      Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=2",
    },
    {
      Date: "2024-01-09T07:00:00+01:00",
      EpochDate: 1704780000,
      Temperature: {
        Minimum: {
          Value: 29,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 36,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Plutôt nuageux",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 7,
        IconPhrase: "Nuageux",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather "],
      MobileLink:
        "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=3",
      Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=3",
    },
    {
      Date: "2024-01-10T07:00:00+01:00",
      EpochDate: 1704866400,
      Temperature: {
        Minimum: {
          Value: 40,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 47,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Averses",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 12,
        IconPhrase: "Averses",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather "],
      MobileLink:
        "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=4",
      Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=4",
    },
    {
      Date: "2024-01-11T07:00:00+01:00",
      EpochDate: 1704952800,
      Temperature: {
        Minimum: {
          Value: 34,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 45,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 12,
        IconPhrase: "Averses",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 36,
        IconPhrase: "Passages nuageux",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather "],
      MobileLink:
        "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=5",
      Link: "http://www.accuweather.com/fr/fr/toulouse/135244/daily-weather-forecast/135244?day=5",
    },
  ],
};

export const favoritesForecastResponse = [
  {
    name: "Toulouse",
    key: 135244,
    forecast: oneDayForecastResponse.DailyForecasts[0],
  },
  {
    name: "Toulouse",
    key: 135244,
    forecast: oneDayForecastResponse.DailyForecasts[0],
  },
  {
    name: "Toulouse",
    key: 135244,
    forecast: oneDayForecastResponse.DailyForecasts[0],
  },
  {
    name: "Toulouse",
    key: 135244,
    forecast: oneDayForecastResponse.DailyForecasts[0],
  },
];
