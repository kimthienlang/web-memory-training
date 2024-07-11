import CelebrityProfile from "./CelebrityProfile";
import CelebrityProfileDetail from "./CelebrityProfileDetail";

export default function RowIntro({profile}: any) {
  return (
    <div className="row-famous-quote">
      <CelebrityProfile profile={profile} />
      <CelebrityProfileDetail description={profile.description} />
    </div>
  )
}
