export const removeHtmlCharacter = (data : string) => {
    const regex = /(<([^>]+)>)/ig;
    return data?.replace(regex, '');
}
