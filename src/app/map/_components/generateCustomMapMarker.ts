export default function generateCustomMarkerHTML({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const combinedContent = `
    <div style="display: inline-block; position: relative; width: 5rem;">
      <!-- 카드와 삼각형을 포함한 컨테이너에 그림자 적용 -->
      <div style="position: relative; border-radius: 0.5rem; background-color: #bfbfbf; box-shadow: 0px 8px 2px 0px rgba(0, 0, 0, 0.05);">
        <!-- 카드 내용 -->
        <div style="width: 5rem; padding: 0.25rem; background-color: #bfbfbf; border-radius: 0.5rem; text-align: center;">
          <img src="${src}" alt="${title}" style="width: 4.5rem; height: 4rem; object-fit: cover; border-radius: 0.25rem;" />
          <div style="color: #404040; font-size: 0.875rem; font-weight: 600; margin-top: 0.25rem; word-break: keep-all; line-height: 20px;
">${title}</div>
        </div>

        <!-- 삼각형 -->
        <div style="position: absolute; z-index:-2;  width: 18px; height: 16px; bottom: -8px; left: 50%; transform: translateX(-50%) rotate(180deg); ">
          <div style="position: absolute; width: 100%; height: 100%; background-color: #bfbfbf; border-top-right-radius: 6px; transform: rotate(-60deg) skewX(-30deg) scaleY(0.866); box-shadow: 6px -6px 2px 0px rgba(0, 0, 0, 0.05);"></div>
        </div>
      </div>
    </div>
  `;

  return combinedContent;
}
