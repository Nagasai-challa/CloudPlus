require("./App.css");
var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactdomclient = require("react-dom/client");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





const $5f5618e170a87a9f$var$Body = ()=>{
    const key = "5fcff7fd909a7f00e463bfd186b741f5";
    const base = "https://api.openweathermap.org/data/2.5/";
    const [searchText, setSearhText] = (0, $9WItx$react.useState)("guntur");
    const [buttonClicked, setButtonClicked] = (0, $9WItx$react.useState)(true);
    const [weatherData, setWeatherData] = (0, $9WItx$react.useState)(null);
    const [error, setError] = (0, $9WItx$react.useState)(null);
    (0, $9WItx$react.useEffect)(()=>{
        if (buttonClicked) fetchData();
    }, [
        buttonClicked
    ]);
    async function fetchData() {
        const data = await fetch(`${base}weather?q=${searchText}&APPID=${key}`);
        const json = await data.json();
        if (json.cod === "404") {
            setError("City not found");
            setWeatherData(null);
        } else {
            setError(null);
            setWeatherData(json);
        }
        setButtonClicked(false);
    }
    function handleButton() {
        setButtonClicked(true);
    }
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                "search-bar": true,
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                        className: "search-input",
                        type: "text",
                        placeholder: "search",
                        spellCheck: "false",
                        value: searchText,
                        onChange: (e)=>{
                            setSearhText(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        className: "search-button",
                        onClick: handleButton,
                        children: "Search "
                    })
                ]
            }),
            error ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                className: "error",
                children: error
            }) : weatherData ? /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)((0, $9WItx$reactjsxruntime.Fragment), {
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "rain-temp",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("span", {
                                className: "temp",
                                children: [
                                    Math.round(weatherData.main.temp - 273.15),
                                    "\xb0C"
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("span", {
                                className: "rain",
                                children: [
                                    weatherData.weather[0].description.toUpperCase(),
                                    "\u26C8"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "test",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                        children: "Temparature"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h1", {
                                        children: [
                                            Math.round(weatherData.main.temp - 273.15),
                                            "\xb0C"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                        children: "Humidity"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("h1", {
                                        children: [
                                            weatherData.main.humidity,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("p", {
                                        children: "Wind Speed"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                                        children: weatherData.wind.speed
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                className: "loading",
                children: "LOADING.."
            })
        ]
    });
};
var $5f5618e170a87a9f$export$2e2bcd8739ae039 = $5f5618e170a87a9f$var$Body;



const $da11a1101b2a894a$var$root = (0, ($parcel$interopDefault($9WItx$reactdomclient))).createRoot(document.getElementById("root"));
const $da11a1101b2a894a$var$AppLayout = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $5f5618e170a87a9f$export$2e2bcd8739ae039), {});
};
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$AppLayout, {}));


//# sourceMappingURL=App.js.map
