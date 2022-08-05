const RenderTitle = (label, index) => (<h2 className={`${index === 1 ? 'first-topic' : ''}`}>{label}</h2>);

export default RenderTitle;