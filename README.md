
1. What is JSX, and why is it used?

=JSX stands for JavaScript XML.

=It lets you write HTML-like code inside JavaScript.

=React uses JSX to describe what the UI should look like.
==Because it makes code easier to read and looks similar to HTML, but with full JavaScript power.
==Why used?
Easier to read.
Looks like HTML but with JavaScript logic.


2. What is the difference between State and Props?

State:::

=Data that belongs to a component.

=Can be changed/updated inside the component.

-Example: A counter value that increases when you click a button.

Props:::

=Data passed from parent to child components.

=Read-only, cannot be changed by the child.

=Example: Passing a title to a Header component.

## Simple rule:

State = internal, can change.

Props = external, fixed input.

3. What is the useState hook, and how does it work?

==useState is a React hook that lets you add state to functional components.

code:::

const [count, setCount] = useState(0);


count → current value

setCount → function to update value

==When you call setCount, React re-renders the component with the new value.


4. How can you share state between components in React?

==Lift state up → Put the state in the closest common parent and pass it down as props.

Example:

--Parent holds the state.

--Child A can update it.

--Child B can read/use it.


5. How is event handling done in React?

==Events in React are written in camelCase (e.g., onClick, onChange).

=You pass a function as the event handler.

Example:

function App() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}