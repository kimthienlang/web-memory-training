export default function CelebrityProfile({profile = {src: '', name: ''}}) {
    return (
        <div className="column-image">
            <h4 className="famous-name">{profile.name}</h4>
            <img src={profile.src} alt="" />
        </div>
    )
}
