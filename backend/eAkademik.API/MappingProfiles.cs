﻿using AutoMapper;
using eAkademik.API.ViewModel.User;
using eAkademik.Model;

namespace eAkademik.API;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<User, UserViewModel>(MemberList.None)
            .ReverseMap()
            .ForAllMembers(x => x.Ignore());
    }
}