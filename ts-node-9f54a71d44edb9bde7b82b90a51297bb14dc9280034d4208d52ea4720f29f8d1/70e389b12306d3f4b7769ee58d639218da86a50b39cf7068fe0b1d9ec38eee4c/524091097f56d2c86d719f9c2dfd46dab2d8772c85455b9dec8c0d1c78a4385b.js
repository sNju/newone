"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = ['button.close[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    opacity: 1;\n    position: absolute;\n    right: -15px;\n    top: -15px;\n    cursor: pointer;\n}\n\n.btn-verify[_ngcontent-%COMP%] {\n    background-color: #9660b8;\n    border-radius: 0;\n    color: #ffffff;\n    border: 1px solid #ececec;\n    cursor: pointer;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n    background-color: #9660b8;\n    color: #fff;\n    text-align: center;\n    position: relative;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n    padding: 40px 40px 10px;\n    text-align: center;\n    position: relative;\n}\n\n.modal-body[_ngcontent-%COMP%]   .promo-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-decoration: underline;\n    color: #a679c3;\n    text-align: center;\n    margin: 15px;\n    cursor: pointer;\n}\n\n.promo-hover[_ngcontent-%COMP%] {\n    width: 23px;\n    height: 23px;\n    background-color: rgba(100,34,142,0.39);\n    border-radius: 60px;\n    position: absolute;\n    font-size: 16px;\n    color: #fff;\n    right: 10px;\n    top: 7px;\n}\n\n.footer[_ngcontent-%COMP%] {\n    background-color: #f4f4f4;\n    text-align: center;\n    padding: 15px;\n}\n\n.term-secton[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    color: #666;\n    text-align: center;\n    margin-bottom: 5px;\n}\n\n.term-secton[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL3NyYy9hcHAvaGVhZGVyL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dlYmFwcC9zcmMvYXBwL2hlYWRlci92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvd2ViYXBwL2Rpc3QvbmdmYWN0b3J5L3NyYy9hcHAvaGVhZGVyL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL3dlYmFwcC9kaXN0L25nZmFjdG9yeS9zcmMvYXBwL2hlYWRlci92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudC5jc3Muc2hpbS5uZ3N0eWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHO0FBQ0Ysb0JBQW9COztBQUdSLFFBQUEsTUFBTSxHQUFTLENBQUMsODZDQUE4NkMsQ0FBQyxDQUFDO0FBQzc4QyxrWkFBa1oiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSB0aGUgQW5ndWxhciB0ZW1wbGF0ZSBjb21waWxlci5cbiAqIERvIG5vdCBlZGl0LlxuICogQHN1cHByZXNzIHtzdXNwaWNpb3VzQ29kZSx1c2VsZXNzQ29kZSxtaXNzaW5nUHJvcGVydGllcyxtaXNzaW5nT3ZlcnJpZGV9XG4gKi9cbiAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5cbmV4cG9ydCBjb25zdCBzdHlsZXM6YW55W10gPSBbJ2J1dHRvbi5jbG9zZVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0xNXB4O1xcbiAgICB0b3A6IC0xNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tdmVyaWZ5W19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjYwYjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1oZWFkZXJbX25nY29udGVudC0lQ09NUCVdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2NjBiODtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubW9kYWwtYm9keVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tb2RhbC1ib2R5W19uZ2NvbnRlbnQtJUNPTVAlXSAgIC5wcm9tby10ZXh0W19uZ2NvbnRlbnQtJUNPTVAlXSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiAjYTY3OWMzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvbW8taG92ZXJbX25nY29udGVudC0lQ09NUCVdIHtcXG4gICAgd2lkdGg6IDIzcHg7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsMzQsMTQyLDAuMzkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDdweDtcXG59XFxuXFxuLmZvb3Rlcltfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50ZXJtLXNlY3Rvbltfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50ZXJtLXNlY3Rvbltfbmdjb250ZW50LSVDT01QJV0gICBsaVtfbmdjb250ZW50LSVDT01QJV0ge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufSddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUptYVd4bElqb2lMMVZ6WlhKekwyMWhZeTlFYjJOMWJXVnVkSE12ZDJWaVlYQndMM055WXk5aGNIQXZhR1ZoWkdWeUwzWmxjbWxtZVM5MlpYSnBabmt1WTI5dGNHOXVaVzUwTG1OemN5NXphR2x0TG01bmMzUjViR1V1ZEhNaUxDSjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp1Wnpvdkx5OVZjMlZ5Y3k5dFlXTXZSRzlqZFcxbGJuUnpMM2RsWW1Gd2NDOXpjbU12WVhCd0wyaGxZV1JsY2k5MlpYSnBabmt2ZG1WeWFXWjVMbU52YlhCdmJtVnVkQzVqYzNNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lJQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPeUo5XG4iXX0=