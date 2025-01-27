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
         <!-- 삼각형 -->
        <div style="position: absolute; top: 97%; left: 50%; transform: translateX(-50%);">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
            
            <!-- 삼각형 -->
            <path
              d="M9.78885 11.0193C9.0518 12.3269 6.94819 12.3269 6.21115 11.0193L0 0L16 1.43274e-06L9.78885 11.0193Z"
              fill="#BFBFBF"
              filter="url(#shadow)" />
          </svg>
        </div>
      </div>
    </div>
  `;

  return combinedContent;
}
