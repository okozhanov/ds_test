export const stargazer = (rating) => {
    let no_stars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let yes_stars = []

    if (+rating > 0) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 1) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 2) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 3) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 4) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 5) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 6) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 7) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 8) {
        yes_stars.push(1)
        no_stars.pop()
    }
    if (+rating > 9) {
        yes_stars.push(1)
        no_stars.pop()
    }
    return {yes_stars, no_stars}
}