exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ sendContactForm)
/* harmony export */ });
const sendContactForm = async (data)=>fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).then((res)=>{
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    });


/***/ }),

/***/ 7812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7851);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const initValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
};
const initState = {
    values: initValues
};
function Form() {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initState);
    const { values  } = state;
    const handleChange = ({ target  })=>{
        setState((prev)=>({
                ...prev,
                values: {
                    ...prev.values,
                    [target.name]: target.value
                }
            }));
    };
    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
            const req = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_4__/* .sendContactForm */ .m)(e);
            if (req.status === 200) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(` 🙌🏻 Nachricht wurde erfolgreich gesendet ${values.name}`, {
                    position: react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.POSITION.TOP_RIGHT,
                    autoClose: 8000
                });
            }
        } catch (e1) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`🥺 Es gibt ein Problem ${values.name}`, {
                position: react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.POSITION.TOP_RIGHT,
                autoClose: 8000
            });
        }
        setState(initState);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "b py-16 bg-blue-100 px-4 sm:px-6 h-screen w-screen flex justify-center items-center ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: submitHandler,
                    className: "grid grid-cols-1 gap-y-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-2xl text-center text-teal-400 font-medium py-10 px-4 justify-center",
                                    children: "Wenn Sie an meinem Lebenslauf interessiert sind, kontaktieren Sie mich einfach per E-Mail."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "name",
                                    className: "sr-only",
                                    children: "Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "name",
                                    type: "text",
                                    required: true,
                                    value: values.name,
                                    onChange: handleChange,
                                    minLength: "3",
                                    className: "block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-cyan-200 focus:border-cyan-200 border-gray-300 rounded-md focus:outline-none focus:ring-2",
                                    placeholder: "Full name"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "email",
                                    className: "sr-only",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    required: true,
                                    value: values.email,
                                    onChange: handleChange,
                                    className: "block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-cyan-300 focus:border-cyan-300 border-gray-300 rounded-md focus:outline-none focus:ring-2",
                                    placeholder: "Email"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "subject",
                                    className: "sr-only",
                                    children: "Subject"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "subject",
                                    type: "text",
                                    required: true,
                                    minLength: "3",
                                    value: values.subject,
                                    onChange: handleChange,
                                    className: "block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-teal-300 focus:border-teal-300 border-gray-300 rounded-md focus:outline-none focus:ring-2",
                                    placeholder: "Subject"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "message",
                                    className: "sr-only",
                                    children: "Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    name: "message",
                                    type: "text",
                                    required: true,
                                    rows: "4",
                                    value: values.message,
                                    onChange: handleChange,
                                    minLength: "10",
                                    maxLength: "120",
                                    className: "block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-teal-400 focus:border-teal-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 ",
                                    placeholder: "Message"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "inline-flex justify-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ",
                                children: "Submit"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {})
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;