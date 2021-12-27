class DateService{
    static addMinutes(minutes) {
        return new Date(Date.now() + minutes*60000);
    }
}
module.exports = DateService;
