interface TestComponentProps {
	name: string;
}

function TestComponent({ name }: TestComponentProps) {
	return <h1>Hello {name}</h1>;
}

export default TestComponent;
