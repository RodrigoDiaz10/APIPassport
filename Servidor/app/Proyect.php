<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Proyect extends Model
{
    protected $fillable = [
        'aceptacion','state'
    ];
    public function students()
    {
        return $this->belongTo('App\Student');
    }
    public function teacher()
    {
        return $this->belongsTo('App\Teacher');
    }
    public function forms()
    {
        return $this->belongTo('App\Form');
    }
    public function Qualifications()
    {
        return $this->belongTo('App\Qualifications');
    }
}
