{
     [HttpPost]
    public async Task<IActionResult> CreateUser(UserDto user)
     {
         await _service.CreateAsync(user);
        return Ok();
    }
 }