import LinkSocialMedia from "./LinkSocialMedia";

export default function CelebrityProfileDetail({description = ''}) {
    return (
        <div className="column-quote">
            <LinkSocialMedia />
            <p className="description">
                {description}
            </p>
        </div>
    )
}
