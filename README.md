# 목차

재사용 가능한 공용 컴포넌트들을 아카이빙할 레포지토리 입니다.

1. [AutoResizeTextArea](#autoresizetextarea)

## `AutoResizeTextArea`

`AutoResizeTextArea`는 입력 내용에 따라 자동으로 크기가 조정되는 텍스트 영역 컴포넌트입니다.

`useRef`와 `useEffect`를 사용하여 텍스트 영역의 크기를 조정합니다.

자세한 구현 내용은 [AutoResizeTextArea.tsx](src/components/AutoResizeTextArea.tsx) 파일을 참고하세요.

### 사용법

```tsx
import AutoResizeTextArea from "@/components/AutoResizeTextArea";

function App() {
  return <AutoResizeTextArea placeholder="Type here..." />;
}

export default App;
```

### Props

`AutoResizeTextArea`는 기본적으로 HTML `<textarea>` 요소의 모든 속성을 지원합니다. 추가적으로 `className`을 통해 스타일을 지정할 수 있습니다.

### 예제

```tsx
import AutoResizeTextArea from "@/components/AutoResizeTextArea";

function Example() {
  const [input, setInput] = useState("");
  return (
    <div>
      {input}
      <AutoResizeTextArea
        onChange={(e) => setInput(e.currentTarget.value)}
        className="my-textarea"
        placeholder="Type something..."
      />
    </div>
  );
}

export default Example;
```

### 사용 **화면**

![alt text](./src/assets/AutoResizeTextArea.gif)
