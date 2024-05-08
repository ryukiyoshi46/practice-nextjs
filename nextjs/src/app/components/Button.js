import Link from "next/link"

export const Button = ({children, hrefURL, addClasses}) => {
  return (
    <Link href={hrefURL} className={`c-button01 ${addClasses}`}>{children}</Link>
  )
}