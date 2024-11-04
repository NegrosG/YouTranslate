const CopyText = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied!"))
        .catch((error) => console.error("Failed:", error))
}

export default CopyText;