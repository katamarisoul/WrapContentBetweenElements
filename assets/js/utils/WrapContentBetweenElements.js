export function WrapContentBetweenElements(parentSelector, targetSelector, wrapTag) {
    const parentElement = document.querySelector(parentSelector);
    const targetElements = parentElement.querySelectorAll(targetSelector);

    targetElements.forEach(targetElement => {
        // ラップ要素を作成
        const wrapElement = document.createElement(wrapTag);

        // ターゲット要素の次の要素を取得
        let nextElement = targetElement.nextElementSibling;

        // 次の要素が存在するかつ、
        while(nextElement && !nextElement.classList.contains(targetSelector.slice(1))) {
            // さらに次の要素を取得
            const moreNextElement = nextElement.nextElementSibling;

            // 次の要素をラップ要素に挿入
            wrapElement.appendChild(nextElement);

            // 次の要素を更新
            nextElement = moreNextElement;
        }

        // targetElementの下に作成したラップ要素を挿入
        parentElement.insertBefore(wrapElement, targetElement.nextElementSibling);

        // targetElementをラップ要素に挿入
        wrapElement.insertBefore(targetElement, wrapElement.firstChild);
    });
}