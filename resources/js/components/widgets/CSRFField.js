export default function CSRFField () {
    const csrf = document.querySelector('meta[name="csrf-token"]').content;
    return (
        <input type="hidden" name="_token" value={csrf}/>
    );
}
