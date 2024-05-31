import { WrapContentBetweenElements } from "./utils/WrapContentBetweenElements.js";

document.addEventListener('DOMContentLoaded', () => {
    WrapContentBetweenElements(
        '.js-wrap-trigger',
        '.js-wrap-target',
        'section'
    );
});