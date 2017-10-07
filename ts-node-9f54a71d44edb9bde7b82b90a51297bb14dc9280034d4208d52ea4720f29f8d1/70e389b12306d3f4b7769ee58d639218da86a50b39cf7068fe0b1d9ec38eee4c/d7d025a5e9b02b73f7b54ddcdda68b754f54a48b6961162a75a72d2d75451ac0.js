"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = ['button.close[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    opacity: 1;\n    position: absolute;\n    right: -15px;\n    top: -15px;\n    cursor: pointer;\n}\n\n.btn-sendotp[_ngcontent-%COMP%] {\n    background-color: #9660b8;\n    border-radius: 0;\n    color: #ffffff;\n    border: 1px solid #ececec;\n    cursor: pointer;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n    background-color: #9660b8;\n    color: #fff;\n    text-align: center;\n    position: relative;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n    padding: 40px 40px 10px;\n    text-align: center;\n    position: relative;\n}\n\n.modal-body[_ngcontent-%COMP%]   .promo-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-decoration: underline;\n    color: #a679c3;\n    text-align: center;\n    margin: 15px;\n    cursor: pointer;\n}\n\n.promo-hover[_ngcontent-%COMP%] {\n    width: 23px;\n    height: 23px;\n    background-color: rgba(100,34,142,0.39);\n    border-radius: 60px;\n    position: absolute;\n    font-size: 16px;\n    color: #fff;\n    right: 10px;\n    top: 7px;\n}\n\n.footer[_ngcontent-%COMP%] {\n    background-color: #f4f4f4;\n    text-align: center;\n    padding: 15px;\n}\n\n.term-secton[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    color: #666;\n    text-align: center;\n    margin-bottom: 5px;\n}\n\n.term-secton[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbWFjL0RvY3VtZW50cy93ZWJhcHAvc3JjL2FwcC9oZWFkZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7In0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL2Rpc3QvbmdmYWN0b3J5L3NyYy9hcHAvaGVhZGVyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLnRzIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy93ZWJhcHAvZGlzdC9uZ2ZhY3Rvcnkvc3JjL2FwcC9oZWFkZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7QUFDRixvQkFBb0I7O0FBR1IsUUFBQSxNQUFNLEdBQVMsQ0FBQywrNkNBQSs2QyxDQUFDLENBQUM7QUFDOThDLDhZQUE4WSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBBbmd1bGFyIHRlbXBsYXRlIGNvbXBpbGVyLlxuICogRG8gbm90IGVkaXQuXG4gKiBAc3VwcHJlc3Mge3N1c3BpY2lvdXNDb2RlLHVzZWxlc3NDb2RlLG1pc3NpbmdQcm9wZXJ0aWVzLG1pc3NpbmdPdmVycmlkZX1cbiAqL1xuIC8qIHRzbGludDpkaXNhYmxlICovXG5cblxuZXhwb3J0IGNvbnN0IHN0eWxlczphbnlbXSA9IFsnYnV0dG9uLmNsb3NlW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLTE1cHg7XFxuICAgIHRvcDogLTE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1zZW5kb3RwW19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjYwYjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1oZWFkZXJbX25nY29udGVudC0lQ09NUCVdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2NjBiODtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwtYm9keVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbC1ib2R5W19uZ2NvbnRlbnQtJUNPTVAlXSAgIC5wcm9tby10ZXh0W19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiAjYTY3OWMzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvbW8taG92ZXJbX25nY29udGVudC0lQ09NUCVdIHtcXG4gICAgd2lkdGg6IDIzcHg7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsMzQsMTQyLDAuMzkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDdweDtcXG59XFxuXFxuLmZvb3Rlcltfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50ZXJtLXNlY3Rvbltfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50ZXJtLXNlY3Rvbltfbmdjb250ZW50LSVDT01QJV0gICBsaVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufSddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUptYVd4bElqb2lMMVZ6WlhKekwyMWhZeTlFYjJOMWJXVnVkSE12ZDJWaVlYQndMM055WXk5aGNIQXZhR1ZoWkdWeUwyeHZaMmx1TDJ4dloybHVMbU52YlhCdmJtVnVkQzVqYzNNdWMyaHBiUzV1WjNOMGVXeGxMblJ6SWl3aWRtVnljMmx2YmlJNk15d2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2libWM2THk4dlZYTmxjbk12YldGakwwUnZZM1Z0Wlc1MGN5OTNaV0poY0hBdmMzSmpMMkZ3Y0M5b1pXRmtaWEl2Ykc5bmFXNHZiRzluYVc0dVkyOXRjRzl1Wlc1MExtTnpjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ0lsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN0luMD1cbiJdfQ==