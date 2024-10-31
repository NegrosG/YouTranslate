const CopyText = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => alert("Text copied to clipboard!"))
        .catch((error) => console.error("could not copy text:", error))
}

export default CopyText;